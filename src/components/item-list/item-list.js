import React, {Component} from "react";

import {connect} from "react-redux";

import {v4 as uuid} from 'uuid';

import {changeItem, deleteItem, deleteItems, addItem} from '../../action-creators'

import Item from "../item";

class ItemList extends Component {

    collectItems = () => {
        const {items} = this.props;

        return items.map(item => {
            return <Item key={item.id}
                         item={item}
                         deleteItem={this.deleteItem}
                         changeItem={this.changeItem}/>
        })
    }

    changeItem = (item) => {
        const {onChange} = this.props;

        onChange(item);
    }

    deleteItem = (id) => {
        console.log("delete item with id ", id)
        const {onDelete} = this.props;

        onDelete(id);
    }

    onAddBtnClick = () => {
        const {onAdd} = this.props;

        const newItem = {
            id: uuid(),
            title: ""
        }
        onAdd(newItem)
    }

    onDeleteAllBtnClick = () => {
        const {onAllDelete} = this.props;

        onAllDelete();
    }

    render() {
        return (
            <div>
                {this.collectItems()}
                <a className="waves-effect waves-light btn-small"
                   onClick={this.onAddBtnClick}>
                    Add item
                </a>
                <a className="waves-effect waves-light btn-small"
                   onClick={this.onDeleteAllBtnClick}>
                    Remove all
                </a>
            </div>
        );
    }
}

const mapStateToProps = ({items}) => {
    return {items}
}

const mapDispatchToProps = {
    onChange: changeItem,
    onDelete: deleteItem,
    onAllDelete: deleteItems,
    onAdd: addItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);