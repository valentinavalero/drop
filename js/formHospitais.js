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

    Object.values(steps).forEach(step => {
        step.classList.remove("active");
    });

    steps[currentStep].classList.add("active");

    stepText.textContent = `Passo ${currentStep} de ${totalSteps}`;

    progressBar.style.width =
        `${(currentStep / totalSteps) * 100}%`;

    btnPrev.classList.toggle("hidden", currentStep === 1);

    btnNext.classList.toggle("hidden", currentStep === totalSteps);

    btnSubmit.classList.toggle("hidden", currentStep !== totalSteps);
}

/* NEXT */
btnNext.onclick = () => {

    const campos =
        steps[currentStep].querySelectorAll(
            "input, select, textarea"
        );

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

/* PREV */
btnPrev.onclick = () => {

    if (currentStep > 1) {
        currentStep--;
        updateUI();
    }

};

/* JUSTIFICATIVA */
const radios = document.getElementsByName("tipo");

const box =
    document.getElementById("justificativaBox");

radios.forEach(radio => {

    radio.addEventListener("change", () => {

        if (
            radio.checked &&
            radio.value === "Urgente"
        ) {

            box.style.display = "block";

        } else {

            box.style.display = "none";

        }

    });

});

/* SUBMIT */
document
    .getElementById("formulario")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        document
            .getElementById("popupSucesso")
            .classList.add("show");

        setTimeout(() => {
            window.location.href = "inicio.html";
        }, 2500);

    });

updateUI();