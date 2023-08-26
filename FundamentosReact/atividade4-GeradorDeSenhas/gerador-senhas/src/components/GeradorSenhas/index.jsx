import { useState } from "react";
import styles from "./styles.module.css"
import Input from "../Input";

export default function GeradorSenhas() {

    const [passwordSize, setPasswordSize] = useState(12)
    const [btnCopiar, setBtnCopiar] = useState("Copiar")


    function gerarSenhasAleatorias(tamanhoArray, tamanhoSenha) {
        var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/*-@#$';
        var senhas = [];

        for (var i = 0; i < tamanhoArray; i++) {
            var senha = '';

            for (var j = 0; j < tamanhoSenha; j++) {
                var randomIndex = Math.floor(Math.random() * caracteres.length);
                senha += caracteres.charAt(randomIndex);
            }

            senhas.push(senha);
        }

        return senhas[0];
    }

    // function copiarSenha(){
    //     navigator.clipboard.writeText(senha)

    //     alert(`Senha: ${senha}`)
    // }




    return (
        <>
            <div className={styles.container}>
                <h1>Gerador de senhas</h1>

                <div className={styles.container__button}>

                    <button
                        className={styles.button}
                        onClick={() => {
                            setSenha(gerarSenhasAleatorias(1, 12))
                            setBtnCopiar((currentBtnCopiar) => currentBtnCopiar = "Copiar")
                        }}>
                        Gerar
                    </button>



                    <button
                        className={styles.button}
                        onClick={() => {
                            navigator.clipboard.writeText(senha)
                            setBtnCopiar((currentBtnCopiar) => currentBtnCopiar = "Copiado")
                        }}>
                        {btnCopiar}
                    </button>

                </div>

                <Input
                passwordSize={passwordSize}
                setPasswordSize={setPasswordSize}
                />

            </div>
        </>
    )
}