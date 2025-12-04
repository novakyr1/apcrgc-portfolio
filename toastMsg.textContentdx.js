// CONFIGURATION
const CONFIG = {
    pass1: '042025',
    pass2: '092025',
    master: '552006',
    redirectUrl: 'switch.html'
};

// DOM Elements
let stage1, stage2, stageSuccess, input1, input2, loader1, loader2;

function init() {
    stage1 = document.getElementById('stage1');
    stage2 = document.getElementById('stage2');
    stageSuccess = document.getElementById('stageSuccess');
    input1 = document.getElementById('pass1');
    input2 = document.getElementById('pass2');
    loader1 = document.getElementById('loader1');
    loader2 = document.getElementById('loader2');
    
    // Auto focus on load
    setTimeout(() => {
        if (input1) input1.focus();
    }, 500);
}

// Logic for Page 1
function handleStage1(e) {
    e.preventDefault();
    const val = input1.value;
    const btnText = e.target.querySelector('span');

    if (!val) {
        showToast('Please enter a password', 'error');
        shake(stage1);
        return;
    }

    // UI Loading Effect
    btnText.style.display = 'none';
    loader1.style.display = 'block';

    setTimeout(() => {
        if (val === CONFIG.pass1) {
            // Correct Normal Password -> Go to Stage 2
            switchStage(stage1, stage2);
            setTimeout(() => input2.focus(), 500);
        } else if (val === CONFIG.master) {
            // Master Password -> Go directly to Success (Skip Stage 2)
            successRedirect();
        } else {
            // Wrong Password
            btnText.style.display = 'block';
            loader1.style.display = 'none';
            showToast('Access Denied: Invalid PIN', 'error');
            shake(stage1);
            input1.value = '';
        }
    }, 800); // Artificial delay for realism
}

// Logic for Page 2
function handleStage2(e) {
    e.preventDefault();
    const val = input2.value;
    const btnText = e.target.querySelector('span');

    if (!val) {
        showToast('Please enter the secondary code', 'error');
        shake(stage2);
        return;
    }

    btnText.style.display = 'none';
    loader2.style.display = 'block';

    setTimeout(() => {
        if (val === CONFIG.pass2) {
            // Correct 2nd Password -> Success
            successRedirect();
        } else {
            // Wrong Password
            btnText.style.display = 'block';
            loader2.style.display = 'none';
            showToast('Verification Failed', 'error');
            shake(stage2);
            input2.value = '';
        }
    }, 800);
}

function goBack() {
    input2.value = '';
    input1.value = '';
    switchStage(stage2, stage1);
    setTimeout(() => {
        document.querySelector('#form1 span').style.display = 'block';
        loader1.style.display = 'none';
        document.querySelector('#form2 span').style.display = 'block';
        loader2.style.display = 'none';
    }, 500);
}

function successRedirect() {
    // Hide current stages and show success
    stage1.classList.add('hidden');
    stage2.classList.add('hidden');
    stageSuccess.classList.remove('hidden');
    stageSuccess.classList.add('fade-in');

    // Perform Redirect
    setTimeout(() => {
        window.location.href = CONFIG.redirectUrl;
    }, 1500);
}

// Helper: Switch Stages with Animation
function switchStage(from, to) {
    from.style.opacity = '0';
    from.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        from.classList.add('hidden');
        from.classList.remove('fade-in');
        
        to.classList.remove('hidden');
        // Trigger reflow
        void to.offsetWidth;
        to.classList.add('fade-in');
        to.style.opacity = '1';
        to.style.transform = 'scale(1)';
    }, 400);
}

// Helper: Shake Animation
function shake(element) {
    element.classList.add('shake');
    setTimeout(() => element.classList.remove('shake'), 500);
}

// Helper: Toast Notification
function showToast(msg, type) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');
    
    toast.className = `toast ${type} show`;
    toastMsg.textContent = msg;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Initialize when page loads
window.onload = init;