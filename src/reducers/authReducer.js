

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedId: true, user } : {};

export default function(state=initialState, action) {
    switch (action) {
        
    }

    return state;
}