/**
 * Created by lmy on 18-2-12.
 */
import React from 'react';
import PropTypes from 'prop-types';

function EssayInfo(props) {
    console.log(props);
    if (props.head == null) {
        return <div>
            <ul>
                <li>{props.name}</li>
                <li><img src="../../images/photo.jpeg" alt="" width={30} height={30}/></li>
                <li>{props.title}</li>
                <li>{props.text}</li>
                <li>{props.date}</li>
                <div className="show">
                    <div className="showTitle">
                        <div className='markdown-rendered-contect'
                             dangerouslySetInnerHTML={{__html: props.title}}/>
                    </div>

                    <div className="showText">
                        <div className='markdown-rendered-contect'
                             dangerouslySetInnerHTML={{__html: props.text}}/>
                    </div>

                </div>
            </ul>
        </div>
    } else {
        return <div>
            <ul>
                <li>{props.name}</li>
                <li><img src={props.head} alt="" width={30} height={30}/></li>
                <li>{props.title}</li>
                <li>{props.text}</li>
                <li>{props.date}</li>
                <div className="show">
                    <div className="showTitle">
                        <div className='markdown-rendered-contect'
                             dangerouslySetInnerHTML={{__html: props.title}}/>
                    </div>

                    <div className="showText">
                        <div className='markdown-rendered-contect'
                             dangerouslySetInnerHTML={{__html: props.text}}/>
                    </div>

                </div>
            </ul>
        </div>
    }
}

export default class Essay extends React.Component {
    componentDidMount() {
        this.props.allEssayInfo();
    }

    render() {
        const {essayInfo} = this.props;
        return <div>
            {essayInfo.map((val)=>
                <EssayInfo key={val.ess_id} name={val.name} title={val.title} text={val.text} date={val.date}
                           head={val.head}/>
            )}
        </div>
    }
}
Essay.propTypes = {
    essayInfo: PropTypes.arrayOf(PropTypes.shape({
        ess_id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        // date:PropTypes.string.isRequired
    }).isRequired).isRequired,
};

