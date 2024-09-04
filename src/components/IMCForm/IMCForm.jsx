import { useState } from "react";
import styles from './IMCForm.module.css';


const IMCForm = () => {
    const [ altura, setAltura ] = useState('');
    const [ peso, setPeso ] = useState('');
    const [imc, setImc] = useState(null);
    const [ classificacao, setClassificacao ] = useState('');

    const calcularIMC = () => {
        const alturaMetros = parseFloat(altura) / 100;
        const pesoKG = parseFloat(peso);
        if(alturaMetros > 0 && pesoKG > 0){
            const imcCalculado = pesoKG / (alturaMetros * alturaMetros);
            setImc(imcCalculado.toFixed(2));
            classifcarIMC(imcCalculado);
        }
    }
    const classifcarIMC = (imc) => {
        if(imc < 18.5){
            setClassificacao('Você está abaixo do peso');
        } else if (imc >= 18.5 && imc < 24.9){
            setClassificacao('Você está com seu peso normal')
        } else if (imc >= 25 && imc < 29.9){
            setClassificacao('Você está com sobrepeso')
        } else{
            setClassificacao('Você está obeso')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        calcularIMC();
    }

    return (
<div className={styles.container}>
        <h2>Calculadora de IMC</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
            <label>Altura (cm):</label>
            <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
            />
        </div>
        <div className={styles.inputGroup}>
            <label>Peso (kg):</label>
            <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
            />
        </div>
        <button type="submit" className={styles.button}>Calcular IMC</button>
        </form>
        {imc && (
        <div className={styles.result}>
            <p>Seu IMC é: {imc}</p>
            <p>Classificação: {classificacao}</p>
        </div>
        )}
    </div>
    )
}


export default IMCForm;