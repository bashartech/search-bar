const searchInput = document.getElementById("search-input")
const userTable = document.getElementById("user-table")
let dataRows = document.querySelectorAll("#user-table tbody tr")
let nameElement = document.querySelectorAll(".name")
let degreeElement = document.querySelectorAll(".degree")
let skillsElement = document.querySelectorAll(".skills")

searchInput.addEventListener("input" , (e) =>{
    const value = e.target.value.toLowerCase()

   dataRows.forEach((rows, index) => {
const name = nameElement[index].textContent.toLowerCase()
const degree = degreeElement[index].textContent.toLowerCase()
const skills = skillsElement[index].textContent.toLowerCase()
   
const isVisible = name.includes(value) || degree.includes(value) || skills.includes(value)
rows.classList.toggle("hide", !isVisible)

})
})