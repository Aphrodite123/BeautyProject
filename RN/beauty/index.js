import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import API from '../common/network';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // API.queryBanner()
        //     .then(result => {
        //         console.warn(JSON.stringify(result));
        //     });

        let categore = "Girl";
        // API.queryByCategories(categore)
        //     .then(result => {
        //         console.warn(JSON.stringify(result));
        //     });

        let type = "Girl";
        let page = 1;
        let count = 10;
        // API.queryByCategoreList(categore, type, page, count)
        //     .then(result => {
        //         console.warn(JSON.stringify(result));
        //     });

        // API.queryRandom(categore, type, count)
        //     .then(result => {
        //         console.warn(JSON.stringify(result));
        //     });

        let postId = "5e777432b8ea09cade05263f";
        // API.queryArticleDetail(postId)
        //     .then(result => {
        //         console.warn(JSON.stringify(result));
        //     });

        // let hot = "views";
        // API.queryHot(hot, categore, count)
        //     .then(result => {
        //         console.warn(JSON.stringify(result));
        //     });

        // API.queryComment(postId)
        //     .then(result => {
        //         console.warn(JSON.stringify(result));
        //     });


        let search = "刘亦菲"
        API.search(search, "All", "Android", page, count)
            .then(result => {
                console.warn(JSON.stringify(result));
            });


    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Hello World!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#f7f7f7',
        marginTop: 0,
        marginBottom: 0,
    },

    title: {
        marginTop: 20,
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'D-DINCondensed-Bold',
    },
});
