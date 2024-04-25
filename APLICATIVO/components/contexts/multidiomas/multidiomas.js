import {TouchableOpacity,View,Text,StyleSheet} from 'react-native';

const {t,i18n} = useTranslation();
const Language = value => {
  i18n.changeLanguage(value)
    .then(() => {
      console.log("linguagem alterada")
    })
    .catch((err) => {
      console.log(err);
    })
}
function Idiomas () {
 return(   
   <View>
    <TouchableOpacity style={styles.ingles} onPress={ () => Language('en') }>
        <Text>inglês</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.portugues} onPress = { () => Language('pt') } >
       <Text>Português Brasil</Text>
    </TouchableOpacity>
   </View>
)}




const styles = StyleSheet.create({

ingles:{
    borderColor:'black', 
    borderWidth: 1 ,
    marginTop:-80,
    marginLeft:220,
    marginRight:120,
    
   
  },
  portugues:{
    borderColor:'black',
     borderWidth: 1, 
     marginRight:175,
     marginLeft:100,
     marginTop:-22,
  }
});

export default Idiomas;