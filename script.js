function getFormvalue() {
    // Get the values from the form elements using their name attributes
    var firstName = document.forms["form1"]["fname"].value;
    var lastName = document.forms["form1"]["lname"].value;

    // Display the values using alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
}
