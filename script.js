
        function showLoginForm() {
            document.getElementById('login-form').style.display = 'block';
            document.getElementById('registration-form').style.display = 'none';
        }

        function showRegistrationForm() {
            document.getElementById('registration-form').style.display = 'block';
            document.getElementById('login-form').style.display = 'none';
        }

        function validateLoginForm() {
            try {
                var username = document.getElementById('username').value;
                var password = document.getElementById('password').value;

                if (username === "") {
                    throw new Error("Please enter a username.");
                }

                if (password === "") {
                    throw new Error("Please enter a password.");
                }

                // Add your username validation criteria here
                if (username.length < 4) {
                    throw new Error("Username must be at least 4 characters long.");
                }
                if (!/^[a-zA-Z0-9]+$/.test(username)) {
                    throw new Error("Username can only contain letters and numbers.");
                }
        
                // Add your login logic here
                // For simplicity, let's assume a successful login
                alert("Login successful!");
                window.location.href = 'page.html';
                return false; // Prevent form submission
            } catch (error) {
                alert(error.message);
                return false; // Prevent form submission
            } finally {
            }
        }

        function validateRegistrationForm() {
            try {
                var newUsername = document.getElementById('newUsername').value;
                var newPassword = document.getElementById('newPassword').value;
        
                if (newUsername === "") {
                    throw new Error("Please enter a new username.");
                }
        
                if (newPassword === "") {
                    throw new Error("Please enter a new password.");
                }
        
                // Add your username validation criteria here
                if (newUsername.length < 4) {
                    throw new Error("Username must be at least 4 characters long.");
                }
        
                if (!/^[a-zA-Z0-9]+$/.test(newUsername)) {
                    throw new Error("Username can only contain letters and numbers.");
                }
        
                // Add your registration logic here
                // For simplicity, let's assume a successful registration
                alert("Registration successful!");
                window.location.href = 'jercel.html';
        
        
                return false; // Prevent form submission
            } catch (error) {
                alert(error.message);
                return false; // Prevent form submission
            } finally {
            }
        }
        