let myLeads =JSON.parse(localStorage.getItem('Leads')) ||[];

const url = document.querySelector('.inputbox');
const save = document.querySelector('.savebtn');
const tab = document.querySelector('.tabtn');
const clearLeads = document.querySelector('.deletebtn');
const HtmlLead = document.querySelector('.leads');

function myleads () {
let html = '';

 myLeads.forEach(lead => {
  html += `<li>
              <a href="${lead}" target="_blank">${lead}
              </a>
            </li>`
 });
 HtmlLead.innerHTML = `<ul>${html}</ul`;
}
myleads()
save.addEventListener('click', () => {
  const inputValue = url.value.trim();
  if (inputValue !== '') {
    myLeads.push(inputValue);
    url.value = '';
    localStorage.setItem('Leads', JSON.stringify(myLeads));
    myleads();
  }
})
clearLeads.addEventListener('click', ()=> {
  localStorage.clear();
  myLeads = [];
  HtmlLead.innerHTML = '';
})