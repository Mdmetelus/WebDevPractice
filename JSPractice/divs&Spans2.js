//const myParagraph = document.querySelector('.littlevh');
class Sections {
    constructor(monkey) {
        console.log('monkey');
        this.bannana = monkey;
        // this.content = this.bannana.querySelector('')
        this.expandButton = this.bannana.querySelector('body .big .button');
        this.expandButton.textContent = "Click To Open";
        console.log('expandButton');
        this.expandButton.addEventListener("dblclick", (event) => this.expandSection(event));

    };

    expandSection(event) {
        this.bannana.classList.toggle('.littlevh-open');
        if (this.bannana.classList.contains('.littlevh-open')) {
            this.expand.textContent = "<=[ Click to close ]=>";
        } else {
            this.expand.textContent = "<=[ Click to Open ]=>";
        }


    }
}


// START HERE: Select all classes named ".article" and assign that value to the articles variable

let littleDiv = document.querySelectorAll('body .big .littlevh');
console.log(littleDiv);
// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.

littleDiv = Array.from(littleDiv).map((monkey) => { return new Sections });
console.log(littleDiv);



// this.expandButton.forEach (one => {
//   return (this.expandButton.textContent = 'expand');
// });