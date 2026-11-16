        export function filtre(channels, text, category) {
            const search = text.trim().toLowerCase();
            return channels.filter((channel) => {
                const name = channel.name.toLowerCase().includes(text);
                const numbre = channel.channelNumber.includes(text)
                const matchesCategry = category === 'all' || channel.category === category;
                return (numbre || name) && matchesCategry;
            });
        }