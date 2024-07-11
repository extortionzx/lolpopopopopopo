const discordWebhookUrl = 'https://discord.com/api/webhooks/1260391857637167246/Pk3qxuINQNEVfwfoSBWLwKbeHfhNcYQjQ0Pm078LOWdzSuoaQBrptn6kix4ymBZ70zcS';
let lastSubmissionTime = 0;
const cooldownPeriod = 60 * 60 * 1000; // 60 minutes in milliseconds

async function getUserIPAddress() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error getting user IP address:', error);
        return null;
    }
}

async function sendIPToDiscordWebhook(ipAddress, link, description) {
    try {
        const response = await fetch(discordWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: `User IP Address: ${ipAddress}\nLink: ${link}\nDescription: ${description}`
            })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Error sending IP to Discord webhook:', error);
        throw error; // Propagate the error to handle it further if needed
    }
}

document.getElementById('requestForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const currentTime = Date.now();
    if (currentTime - lastSubmissionTime < cooldownPeriod) {
        // Display cooldown warning
        document.getElementById('cooldownMessage').style.display = 'block';
        return;
    }

    document.getElementById('linkMessage').style.display = 'block';
    document.getElementById('submissionMessage').style.display = 'none';

    const link = document.getElementById('linkstring').value;
    const description = document.getElementById('description').value;
    const ipAddress = await getUserIPAddress();

    if (ipAddress) {
        try {
            await sendIPToDiscordWebhook(ipAddress, link, description);
            document.getElementById('submissionMessage').style.display = 'block';
            lastSubmissionTime = currentTime; // Update last submission time
        } catch (error) {
            console.error('Failed to submit report:', error);
            // Handle error display or retry logic here
        } finally {
            document.getElementById('linkMessage').style.display = 'none';
        }
    } else {
        console.error('Failed to get user IP address.');
        // Handle IP address retrieval failure
    }
});

// Hide cooldown message after cooldown period
setInterval(() => {
    const currentTime = Date.now();
    if (currentTime - lastSubmissionTime >= cooldownPeriod) {
        document.getElementById('cooldownMessage').style.display = 'none';
    }
}, 1000); // Check every second

// IP ENd HERE///////////////////////////////////////////////////
