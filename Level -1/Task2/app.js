
 var button = document.getElementById("colorButton");

 button.addEventListener("click", function() {
     // Generate a random color using a helper function
     var randomColor = getRandomColor();

     // Change the button's background color to the random color
     button.style.backgroundColor = randomColor;
 });

 // Helper function to generate a random color
 function getRandomColor() {
     var letters = "0123456789ABCDEF";
     var color = "#";
     for (var i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
     }
     return color;
 }


        // Function to get the current hour
        function getCurrentHour() {
            return new Date().getHours();
        }

        // Function to display a greeting based on the current time
        function displayGreeting() {
            var hour = getCurrentHour();
            var greeting;

            if (hour >= 5 && hour < 12) {
                greeting = "Good morning!";
            } else if (hour >= 12 && hour < 18) {
                greeting = "Good afternoon!";
            } else {
                greeting = "Good evening!";
            }

            // Display the greeting in an alert box
            alert(greeting);
        }

    //<!-- Call the displayGreeting function when the page loads -->

        displayGreeting();