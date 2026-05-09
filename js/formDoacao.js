let currentStep = 1;
const totalSteps = 3;

const steps = {
    1: document.getElementById("step1"),
    2: document.getElementById("step2"),
    3: document.getElementById("step3")
};

const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const btnSubmit = document.getElementById("btnSubmit");
const progressBar = document.getElementById("progressBar");
const stepText = document.getElementById("stepText");

function updateUI() {
    Object.values(steps).forEach(step => step.classList.remove("active"));
    steps[currentStep].classList.add("active");

    stepText.textContent = `Passo ${currentStep} de ${totalSteps}`;
    progressBar.style.width = `${(currentStep / totalSteps) * 100}%`;

    btnPrev.classList.toggle("hidden", currentStep === 1);
    btnNext.classList.toggle("hidden", currentStep === totalSteps);
    btnSubmit.classList.toggle("hidden", currentStep !== totalSteps);
}

btnNext.onclick = () => {

    const campos = steps[currentStep].querySelectorAll("input");

    for (let campo of campos) {
        if (!campo.checkValidity()) {
            campo.reportValidity();
            return;
        }
    }

    if (currentStep < totalSteps) {
        currentStep++;
        updateUI();
    }
};

btnPrev.onclick = () => {
    if (currentStep > 1) {
        currentStep--;
        updateUI();
    }
};

document.getElementById("doacaoForm").onsubmit = function (e) {
    e.preventDefault();

    mostrarPopup();

    setTimeout(() => {
        window.location.href = "inicio.html";
    }, 2500);
};

updateUI();

function mostrarPopup() {
    document.getElementById("popupSucesso").classList.add("show");
}