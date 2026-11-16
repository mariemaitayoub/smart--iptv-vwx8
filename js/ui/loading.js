export function showload(){
    const channelsList = document.querySelector("#channels-list");
    if (!channelsList) return;
    channelsList.innerHTML=`
    <div class='flex justify-center py-10'>
    <div class='w-10 h-10 border-4 border-gray-600 border-t-red-500 rounded-full animate-spin'>
    </div>
    </div>
    `;
}
