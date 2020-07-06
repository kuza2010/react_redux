import React, {Component} from "react";

export default class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {...props.item}
        }
    }

    onChange = (e) => {
        e.persist();

        this.setState(({item: {id}}) => {
                return {
                    item: {
                        title: e.target.value,
                        id
                    }
                }
            },
            () => {
                const {item} = this.state;
                const {changeItem} = this.props;
                changeItem(item);
            });
    }

    render() {
        const {title, id} = this.state.item;
        const {deleteItem} = this.props;

        return (
            <div className="row">
                <div className="col s5 offset-s3">
                    <input type="text"
                           value={title}
                           onChange={this.onChange}/>
                    <label>Tap your own text</label>
                </div>
                <div className="col s1">
                    <a className="waves-effect red lighten-1 btn-small"
                       onClick={() => deleteItem(id)}>
                        Delete
                    </a>
                </div>
            </div>
        );
    }
}
