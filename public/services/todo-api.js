const URL = '/api';

const token = localStorage.getItem('TOKEN');
if (!token && !(location.pathname === '/' || location.pathname === '/index.html'
)){
    const searchParams = new URLSearchParams();
    searchParams.set('redirect', location.pathname);
    location = `/?${searchParams.toString()}`;
}

async function fetchWithError(url, options) {
    if (token) {
        options = options || {};
        options.headers = options.header || {};
        options.headers.Authentication = token;
    }

    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok) {
        return data;
    }
    else {
        throw data.error;
    }
}

export function getTodos() {  
    const url = `${URL}/todos`;
    return fetchWithError(url);
}

export async function addTodo(todo) {  
    const url = `${URL}/todos`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    const data = await response.json();
    return data;
}

export async function updateTodo(todo) {  
    const url = `${URL}/todos/${todo.id}`;
    const data = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    return data.json();
}

export function removeTodo(todoId) {  
    
}

export function signin(credentials) {

}

export function signup(user) {
    console.log('got to signup');
    console.log(user);
    const url = `${URL}/auth/signup`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}

export function success(user) {
    localStorage.setItem('TOKEN', user.token);
    const searchParams = new URLSearchParams(location.search);
    location = searchParams.get('redirect') || './todo.html';
}