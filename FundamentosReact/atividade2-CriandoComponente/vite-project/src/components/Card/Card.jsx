import Button from '../Button'
import './style.css'

export default function Card({posterImage, title}) {
    return (
        <div className='container-card'>
            <picture>
                <img src={posterImage} alt={title} />
            </picture>

            <div className='container-content'>
                <h2>{title}</h2>

                <p>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>

                <div>
                    <Button />
                </div>
            </div>


        </div>
    )
}