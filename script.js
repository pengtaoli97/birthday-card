// 倒计时功能实现
function initializeCountdown() {
    // 获取当前年份
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth(); // 0-11
    const currentDay = new Date().getDate();
    
    // 确定目标日期：如果当前日期已经过了1月1日，则目标是下一年的1月1日
    let targetYear = currentYear;
    if (currentMonth > 0 || (currentMonth === 0 && currentDay > 1)) {
        targetYear = currentYear + 1;
    }
    
    // 设置目标日期为1月1日00:00:00
    const targetDate = new Date(targetYear, 0, 1, 0, 0, 0);
    
    // 获取页面上的倒计时元素
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // 定义更新倒计时的函数
    function updateCountdown() {
        // 获取当前时间
        const now = new Date().getTime();
        
        // 计算剩余时间（毫秒）
        const timeRemaining = targetDate.getTime() - now;
        
        // 如果时间已到，更新目标日期为下一年
        if (timeRemaining <= 0) {
            targetDate.setFullYear(targetDate.getFullYear() + 1);
            return updateCountdown();
        }
        
        // 转换为天、时、分、秒
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        // 更新页面显示，确保两位数格式
        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }
    
    // 立即更新一次倒计时
    updateCountdown();
    
    // 每秒更新一次倒计时
    setInterval(updateCountdown, 1000);
}

// 页面加载完成后初始化倒计时
document.addEventListener('DOMContentLoaded', initializeCountdown);