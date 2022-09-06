import Add from "../img/avatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage,db } from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import {useNavigate} from "react-router-dom" ;


const Register = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate() ;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];


    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      
      uploadTask.on('state_changed',
        (snapshot) => {
          
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          setErr(true) ;
        },
        () => {
          
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user,{
              displayName,
              photoURL:downloadURL
            }) ;
            await setDoc(doc(db ,"users", res.user.uid),{
              uid: res.user.uid ,
              displayName,
              email,
              photoURL:downloadURL 
            });
            await setDoc(doc(db,"userChat",res.user.uid),{}) ;
            navigate("/") ;
          });
        }
      );

      

    } catch (err) {
      setErr(true);
    }
  }

  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">WassUp</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Display name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="img" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        {err && <span>Something went wrong !</span>}
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
