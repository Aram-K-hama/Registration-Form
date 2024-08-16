function addCertificationField() {
    const container = document.getElementById('certificationContainer');
    const inputCount = container.getElementsByClassName('form-control').length;

    if (inputCount < 6) {
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.className = 'form-control mb-2';
        textInput.name = 'certification[]';
        textInput.placeholder = 'بڕوانامە';

        container.appendChild(textInput);
    }

    if (inputCount >= 5) {
        document.getElementById('addCertificationBtn').disabled = true;
    }
}

function toggleSpecialNeed(show) {
    var detailsSection = document.getElementById('specialNeedDetails');
    if (show) {
        detailsSection.style.display = 'flex'; 
    } else {
        detailsSection.style.display = 'none'; 
    }
} 
function updateSalaryPlaceholders() {
    var position = document.getElementById('positionSelect').value;
    var currency = document.getElementById('currencySelect').value;
    var minSalaryInput = document.getElementById('minSalary');
    var maxSalaryInput = document.getElementById('maxSalary');
    var salaryRanges = {
        manager: { min: 50000, max: 100000 },
        developer: { min: 40000, max: 80000 },
        designer: { min: 30000, max: 60000 },
        analyst: { min: 35000, max: 70000 }
    };
    var conversionRates = {
        IQD: 1, 
        USD: 0.68, 
        EUR: 0.58  
    };

    if (position in salaryRanges) {
        var minSalary = salaryRanges[position].min * conversionRates[currency];
        var maxSalary = salaryRanges[position].max * conversionRates[currency];
        var currencySymbol = currency;

        minSalaryInput.placeholder = 'نزمترین: ' + minSalary.toFixed(2) + ' ' + currencySymbol;
        maxSalaryInput.placeholder = 'بەرزترین: ' + maxSalary.toFixed(2) + ' ' + currencySymbol;
    } else {
        minSalaryInput.placeholder = 'نزمترین مووچە بنوسە';
        maxSalaryInput.placeholder = 'بەرزترین مووچە بنوسە';
    }
}

function generateEmployeeCode() {
    var code = 'EMP-' + Math.floor(Math.random() * 90000) + 10000; 
    document.getElementById('employeeCode').value = code;
    document.getElementById('generateCodeBtn').disabled = true;
}

function generateEmployeeAccount() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var button = document.getElementById('generateAccountBtn');
    if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('تکایە ناو و وشەی نهێنی بنوسە بۆ دروستکردنی ئەکاونت.');
        return; 
    }
    usernameInput.value = usernameInput.value.trim();
    passwordInput.value = passwordInput.value.trim();

    button.innerHTML = usernameInput.value;
    button.disabled = true; 
    button.classList.remove('btn-primary'); 
}

function checkBirthday() {
    var birthDateInput = document.getElementById('birthDate').value;
    var birthDateElement = document.getElementById('birthDate');
    var celebrateMessage = document.getElementById('celebrateMessage');
    if (celebrateMessage) {
        celebrateMessage.remove();
    }

    if (birthDateInput) {
        var today = new Date();
        var birthDate = new Date(birthDateInput);
        if (today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()) {
            celebrateMessage = document.createElement('div');
            celebrateMessage.id = 'celebrateMessage';
            celebrateMessage.className = 'alert alert-success mt-3 d-flex justify-content-between align-items-center';
            celebrateMessage.innerHTML = `
                <span>بەخۆشی! ئەمڕۆ یادی لەدایکبونەکەتە!</span>
                <button type="button" class="btn btn-sm btn-outline-danger" onclick="cancelCelebration()">✖</button>
            `;
            birthDateElement.parentNode.insertBefore(celebrateMessage, birthDateElement.nextSibling);
        }
    }
}

function cancelCelebration() {
    var celebrateMessage = document.getElementById('celebrateMessage');
    if (celebrateMessage) {
        celebrateMessage.remove();
    }
}

function checkMaritalStatus() {
    var maritalStatus = document.querySelector('input[name="maritalStatus"]:checked').value;
    var childrenSection = document.getElementById('childrenSection');

    if (maritalStatus === 'married') {
        childrenSection.style.display = 'block';
    } else {
        childrenSection.style.display = 'none';
    }
}