import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    // let valor = 'guilherme silveira'
    
    //const [valor, setValor] = useState('')

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
        // console.log(valor)
    }
    console.log(props.placeholder)
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
        <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto;
