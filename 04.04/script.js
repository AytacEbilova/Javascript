class Human{
    name='';
    surname='';
    age=0;
    gender;
    nationality;
constructor(name,surname,age,gender,nationality){
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.gender=gender;
    this.nationality=nationality;
    }
    getFullName(){
       return `${this.name}\n ${this.surname}`
    }
    getBirthDate(){
        const currentYear=new Date();
        console.log(currentYear);
    }
   
}
class User extends Human{
        username;
        email;
        isAdmin;
        isLogged=false;
        password;
        bio;
        constructor(name,surname,age,gender,nationality,username,email,isAdmin,isLogged,password,bio){
            super(name,surname,age,gender,nationality); 
            this.username=username;
            this.email=email;
            this.isAdmin=isAdmin;
            this.isLogged=isLogged;
            this.password=password;
            this.bio=bio;
           
            if(password.length>5){
               this.password===password
            }
            else{
                console.log("Enter the code again");
            }
           
        }
        changePassword(currentPassword, newPassword) {
            if (currentPassword === this.password) {
              if (currentPassword === newPassword) {
                return 'New password and current password are the same';
              } else {
                this.password = newPassword;
                return 'Password changed successfully';
              }
            }
             else {
              return 'Current password is incorrect';
            }
          }
         
          changeEmail(users, newEmail) {
            const emailUnique = users.every(user => user.email !== newEmail);
            if (emailUnique) {
              this.email = newEmail;
              window.alert('Email changed successfully')
             
            } 
            else {
                window.alert('Email is already taken')
             
            }
}
}
const user=[];
const aytac=new User('Aytac','Ebilova',20,'female','aze','ebilovva',true,true,"123456",'just funny girl');
const aysel=new User('Aysel','Qanbarova',21,'female','aze','qanbarova',false,true,"12346",' funny girl');
const leman=new User('Leman','Mesumova',23,'female','aze','mesumovva',true,false,"456",'hello');
console.log(aytac);
console.log(aysel);
console.log(leman);





    
