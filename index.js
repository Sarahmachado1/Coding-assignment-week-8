class Teenager {
    constructor(name){
        this.name = name;
    }
  
}

class Menu {
constructor() {
    this.guests = [];
    this.selectedGuest = null;
}

start() {
    let selection = this.showMainMenuOptions(); 

    while (selection != 0) {
    switch(selection) {
    case '1' :
    this.createGuest();
    break;
    case '2' :
    this.deleteGuest();
    break;
    case '3' :
    this.viewGuestList();
    break;
    default:
    selection = 0;
    }
    selection = this.showMainMenuOptions();
    }
    
    alert('See you soon!');
    }


    showMainMenuOptions(){
        return prompt(`
        0) end session
        1) create guest
        2) delete guest
        3) view guest list`
        );
    }

    createGuest() {
        let name = prompt('Enter the name for a new guest: ');
        this.guests.push(new Teenager(name));
        }


    deleteGuest() {
      let index = prompt('Enter the index of the guest that you wish to delete: ');
      if (index > -1 && index < this.guests.length) { this.guests.splice(index,1);
        }
        }

    
    viewGuestList() {
      let guestString = '';
      for (let i = 0; i < this.guests.length; i++) {
     guestString += i+ ') ' + this.guests[i].name + '\n';
      }
      alert(guestString);
      }
}





 let menu = new Menu();
    menu.start();
    

