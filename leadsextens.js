let myLeads = [];

const url = document.querySelector('.inputbox');
const save = document.querySelector('.savebtn');
const tab = document.querySelector('.tabtn');
const clearLeads = document.querySelector('.deletebtn');
const HtmlLead = document.querySelector('.leads');

function myleads () {
let leads;
let html = '';
myLeads.push(url.value);
  console.log(myLeads);
   url.value = '';
  localStorage.setItem('leads', JSON.stringify(myLeads));

 leads = JSON.parse(localStorage.getItem('leads'))

 leads.forEach(lead => {
  html += `<li>
              <a href="${lead}" target="_blank">${lead}
              </a>
            </li>`
 });
 HtmlLead.innerHTML = `<ul>${html}</ul`;
}

save.addEventListener('click', () => {
  myleads();
})
clearLeads.addEventListener('click', ()=> {
  localStorage.clear();
  myLeads.splice(0, 1)
  HtmlLead.innerHTML = '';
})