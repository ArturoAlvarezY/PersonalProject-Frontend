<script setup>
import { ref } from 'vue';
import RegisterService from '@/core/api/authentication/services/RegisterService';

const registerService = new RegisterService();
const form = ref({
    username: '',
    password: '',
    errorMessage: '',
    successMessage: '',
    isLoading: false,
});

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MIN_PASSWORD_LENGTH = 6;

const validateForm = () => {
    if (!EMAIL_REGEX.test(form.value.username.trim())) {
        return "Invalid email format.";
    }
    if (form.value.password.length < MIN_PASSWORD_LENGTH) {
        return "Password must be at least 6 characters long.";
    }
    return null;
};

const setLoadingState = (isLoading) => {
    form.value.isLoading = isLoading;
};

const handleRegister = async () => {
    const { username, password } = form.value; 
    const validationError = validateForm();
    if (validationError) {
        form.value.errorMessage = validationError;
        form.value.successMessage = '';
        return;
    }

    setLoadingState(true);
    const response = await registerService.register({ username: username.trim(), password: password.trim() });
    setLoadingState(false);

    if (response.success) {
        form.value.successMessage = response.message;
        form.value.errorMessage = '';
        form.value.username = '';
        form.value.password = '';

        setTimeout(() => {
            form.value.successMessage = '';
        }, 3000);
    } else {
        form.value.errorMessage = response.message;
        form.value.successMessage = '';
    }
};
</script>

<template>
    <form class="form" @submit.prevent="handleRegister">
        <span class="title">Register</span>

        <label for="username" class="label">Email</label>
        <input type="email" id="username" name="email" class="input" v-model="form.username" required aria-invalid="form.errorMessage" />

        <label for="password" class="label">Password</label>
        <input type="password" id="password" name="password" class="input" v-model="form.password" required aria-invalid="form.errorMessage" />

        <button type="submit" class="submit" :disabled="form.isLoading">Register</button>

        <div v-if="form.errorMessage" class="error-message">{{ form.errorMessage }}</div>
        <div v-if="form.successMessage" class="success-message">{{ form.successMessage }}</div>
    </form>
</template>

<style scoped>
.form {
    max-width: 320px;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 0px 4px rgba(52, 52, 53, 0.185);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
}

.title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #1a202c;
}

.label {
    color: rgb(0, 0, 0);
    margin-bottom: 4px;
}

.input {
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    font-size: 1rem;
    color: #4a5568;
    outline: none;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
}

.input:focus {
    background-color: #fff;
    box-shadow: 0 0 0 2px #cbd5e0;
}

.input:valid {
    border: 1px solid green;
}

.input:invalid {
    border: 1px solid rgba(14, 14, 14, 0.205);
}

.submit {
    background-color: #1a202c;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.error-message {
    color: red;
    margin-top: 10px;
    text-align: center;
}

.success-message {
    color: green;
    margin-top: 10px;
    text-align: center;
}
</style>
