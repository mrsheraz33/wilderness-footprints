    // Available Trekking Dates (Client se confirm karo)
    const availableDates = {
        1: "Lemosho Route - 7 Days",
        5: "Machame Route - 6 Days",
        8: "Marangu Route - 5 Days",
        12: "Rongai Route - 6 Days",
        15: "Lemosho Route - 7 Days",
        18: "Northern Circuit - 9 Days",
        22: "Machame Route - 6 Days",
        25: "Umbwe Route - 6 Days",
        28: "Lemosho Route - 8 Days"
    };

    let currentDate = new Date(2026, 5, 1); // June 2026
    let selectedDate = null;

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        const firstDay = new Date(year, month, 1);
        const startDay = firstDay.getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        document.getElementById('monthYear').innerText = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
        
        let calendarHTML = '';
        
        // Empty cells for days before month starts
        for (let i = 0; i < startDay; i++) {
            calendarHTML += `<div class="p-4 border border-gray-100 bg-gray-50"></div>`;
        }
        
        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const isAvailable = availableDates[day];
            const isSelected = (selectedDate === day);
            
            if (isAvailable) {
                calendarHTML += `
                    <div class="p-3 border border-gray-100 hover:bg-green-50 transition cursor-pointer relative group" onclick="selectDate(${day})">
                        <div class="text-center font-semibold text-gray-800">${day}</div>
                        <div class="text-center text-[8px] md:text-xs text-green-600 mt-1">Available</div>
                        <div class="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-full"></div>
                        <!-- Tooltip -->
                        <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                            ${availableDates[day]}
                        </div>
                    </div>
                `;
            } else {
                calendarHTML += `
                    <div class="p-4 border border-gray-100 text-center text-gray-400">
                        ${day}
                    </div>
                `;
            }
        }
        
        document.getElementById('calendarDays').innerHTML = calendarHTML;
        
        // Update selected info
        if (selectedDate && availableDates[selectedDate]) {
            document.getElementById('selectedInfo').innerHTML = `
                <div class="flex flex-col items-center gap-3">
                    <p class="text-green-700 font-semibold"> Selected: ${selectedDate} ${currentDate.toLocaleString('default', { month: 'long' })} 2026</p>
                    <p class="text-gray-600">Route: ${availableDates[selectedDate]}</p>
                    <a href="contact.html" class="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition inline-flex items-center gap-2">
                        Join This Trek <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            `;
        } else {
            document.getElementById('selectedInfo').innerHTML = `<p class="text-gray-500">Click on a green date to join the trek</p>`;
        }
    }
    
    function selectDate(day) {
        if (availableDates[day]) {
            selectedDate = day;
            renderCalendar();
        }
    }
    
    document.getElementById('prevMonth').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        selectedDate = null;
        renderCalendar();
    });
    
    document.getElementById('nextMonth').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        selectedDate = null;
        renderCalendar();
    });
    
    renderCalendar();