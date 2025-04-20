import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {setUser} from "./slices/userSlice";
import { useDispatch } from "react-redux"; 


export function InitialPage() { // export tanımlayınca başka dosyada kullanabiliriz
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser({ adSoyad: fullName }));
    navigate("/mondrian");
  };

  


  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.header}>"Composition with Red, Blue and Yellow"a Hoşgeldiniz</h1>
        <p style={styles.paragraph}>Piet Mondiran'ın Eserini Görmek İçin Adınızı Giriniz</p>
        <form autoComplete="on" onSubmit={handleSubmit} style={styles.form}>
          <table>
            <tbody>
              <tr>
                <td>Ad Soyad: </td>
                <td>
                  <input
                    name="adSoyad"
                    type="text"
                    size="25"
                    maxLength="50"
                    required
                    placeholder="adSoyad"
                    autoFocus
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign: "center" }}>
                  <button type="submit"  name= "Submit" style={styles.button}>Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
    backgroundColor: "rgb(0, 24, 45)",
    margin: 0,
    padding: 0,
    top: 0,
    left :0 ,
    position : "fixed"

  
},


  header: {
    fontSize: "2em",
    margin: 0, 
    padding: "10px",
    alignItems : "center",
    color : "white"
  },


  paragraph: {
    fontSize: "1.2em",
    margin: 0,
    padding: "10px",
    alignItems : "center",
    color : "white"
  },


  form: {
    marginTop: "20px", 
    alignItems: "center",
    color : "white"
  },

  button: {
    padding: "10px 20px",
    fontSize: "1em",
    marginTop: "20px" ,
    alignItems: "center"
  }


};

export default InitialPage;