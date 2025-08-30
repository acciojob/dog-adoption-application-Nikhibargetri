const form = document.getElementById('adoptionForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submission

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const livedWithDog = document.getElementById('checkbox').checked;
    const selectedBreeds = Array.from(document.getElementById('multiSelect').selectedOptions).map(option => option.value);

    const formData = {
        name,
        phone,
        address,
        livedWithDog,
        selectedBreeds
    };

    console.log("Form Submitted:", formData);
    alert("Application Submitted Successfully!");
    form.reset(); // Reset the form after submission
});
