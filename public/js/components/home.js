import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import Header from './header';

function ItemEssayList(props) {
    //默认头像
    // console.log("props");
    // console.log(props);
    if (props.head == null) {
        return <div id={props.user_id}>
            <div id={props.list}>
                <div onClick={props.otherHome}>{props.name}</div>
                <img src="../../images/photo.jpeg" onClick={props.otherHome} alt="" width={30} height={30}/>
                <div onClick={props.onDetials}>{props.title}</div>
                <div>{props.date}</div>
                <div>
                    <div>
                        <div className='markdown-rendered-contect'
                             dangerouslySetInnerHTML={{__html: marked(props.text.toString())}}/>
                    </div>

                </div>
            </div>
            <hr/>
        </div>
    } else {
        return <div id={props.user_id}>
            <div id={props.list}>
                <div onClick={props.otherHome}>{props.name}</div>
                <img src={props.head} alt="" onClick={props.otherHome} width={30} height={30}/>
                <div onClick={props.onDetials}>{props.title}</div>
                <div>{props.date}</div>
                <div>
                    <div>
                        <div className='markdown-rendered-contect'
                             dangerouslySetInnerHTML={{__html: marked(props.text.toString())}}/>
                    </div>

                </div>
            </div>
            <hr/>
        </div>
    }


}


export default class Home extends React.Component {
    componentDidMount() {
        this.props.allEssayList();
    }

    render() {
        const {otherHome, essayList, onDetials} = this.props;
        return <div>
            {essayList.map((val)=>
                <ItemEssayList key={val.ess_id} list={val.ess_id} user_id={val.user_id} onDetials={onDetials}
                               otherHome={otherHome}
                               name={val.name} title={val.title} text={val.text} date={val.date} head={val.head}/>
            )}
        </div>
    }
}
Home.propTypes = {
    essayList: PropTypes.arrayOf(PropTypes.shape({
        ess_id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        user_id: PropTypes.number.isRequired,
    }).isRequired).isRequired,
};