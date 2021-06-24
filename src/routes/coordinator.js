export const goToIndex = (history) => {
    history.push('/')
}

export const goToSignup = (history) => {
    history.push('/signup')
}

export const goToLogin = (history) => {
    history.push('/login')
}

export const goToManageMusic = (history) => {
    history.push('/music')
}

export const goToCreateMusic = (history) => {
    history.push('/music/create')
}

export const goToBrowseMusic = (history) => {
    history.push('/music/all')
}

export const goToSearch = (history, title) => {
    history.push(`/music/title/${title}`)
}