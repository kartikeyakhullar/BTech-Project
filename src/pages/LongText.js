import React from 'react';
import {Component} from 'react';


class LongText extends Component { 
    state = { showAll: false }
    showMore = () => this.setState({showAll: true}); 
    showLess = () => this.setState({showAll: false});
    render() {
        const {content} = this.props;
        let limit = 250;
        const {showAll} = this.state;
        // console.log(content);
        if(content.length<=limit) {
            
            return <div>{content}</div>
        }
        if(showAll) {
            
            return <div>
                {content}
                <a onClick={this.showLess}>Read less</a>
            </div>
        }
        const toShow = content.substring(0,limit)+"...";
        return <div>
            {toShow}
            <a><span onClick={this.showMore}>Read more</span></a>
        </div>
    }
}

export default LongText;