import './styles/index.scss'
const userStatsk = {
    language: 'JavaScript',
    framework: 'React'
}

const user = {
    name: 'Anna',
    age: '37',
    ...userStatsk
}
console.log(user)