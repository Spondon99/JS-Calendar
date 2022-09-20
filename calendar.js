
            let cur = new Date().getMonth();
            let curYear = new Date().getFullYear();

            document.addEventListener('DOMContentLoaded', getMonthYear(cur, curYear));

            function getMonthYear(month, year) {
                
                let months = {0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6: 'July', 7: 'August', 
                    8: 'September', 9: 'October', 10: 'November', 11: 'December'
                };

                document.querySelector("#month h2:nth-child(2)").innerText = months[month];
                document.querySelector('#month h2:nth-child(3)').innerText = year;


                getDate();
            }

            function getDate() {

                let month = document.querySelector("#month h2:nth-child(2)").innerText;
                
                let months = {'January': [0, 31], 'February': [1, 28], 'March': [2, 31], 'April': [3, 30], 'May': [4, 31], 'June': [5, 30], 'July': [6, 31], 'August': [7, 31], 
                    'September': [8, 30], 'October': [9, 31], 'November': [10, 30], 'December': [11, 31]
                };

                let year = parseInt(document.querySelector("#month h2:nth-child(3)").innerText);
                let ob = new Date(year, months[month][0]);
                let day = ob.getDay();
                let date = ob.getDate();

                
                getFullMonth(day, months[month][1]);

            }

            function getFullMonth(start, end_date) {

                let classes = {
                    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six'
                }

                let rows = {
                    0: 'first', 1: 'second', 2: 'third', 3: 'fourth', 4: 'fifth', 5: 'sixth'
                }

                let count = 1;
                for(let i=0; i<6; i++) {
                    for(let j=0; j<7; j++) {
                        if(count > end_date) {
                            document.querySelector("." + classes[j] + "." + rows[i]).innerHTML = '-';
                            continue;
                        }

                        if(j < start) {
                            document.querySelector("." + classes[j] + "." + rows[i]).innerHTML = '-';
                            continue;
                        }

                        document.querySelector("." + classes[j] + "." + rows[i]).innerHTML = count;
                        count++;
                    }
                    start = 0;
                }
            }

            function prevNext(check) {
                let month = document.querySelector("#month h2:nth-child(2)").innerText;
                let year = document.querySelector("#month h2:nth-child(3)").innerText;

                console.log(month);

                let month_string = {'January': [0, 31], 'February': [1, 28], 'March': [2, 31], 'April': [3, 30], 'May': [4, 31], 'June': [5, 30], 'July': [6, 31], 'August': [7, 31], 
                    'September': [8, 30], 'October': [9, 31], 'November': [10, 30], 'December': [11, 31]
                };

                let month_num = {0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6: 'July', 7: 'August', 
                    8: 'September', 9: 'October', 10: 'November', 11: 'December'
                };

                month = month_string[month][0];
                if(check === 'prev') {
                    if(month == 0) {
                        month = 11;
                        year--;
                    } else {
                        month--;
                    }
                    month = month_num[month];
                }

                if(check === 'next') {
                    if(month == 11) {
                        month = 0;
                        year++;
                    } else {
                        month++;
                    }
                    
                    month = month_num[month];
                }
                document.querySelector("#month h2:nth-child(2)").innerText = month;
                document.querySelector("#month h2:nth-child(3)").innerText = year;

                getMonthYear(month_string[month][0], year);
            }