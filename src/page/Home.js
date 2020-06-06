import React from 'react';
import { View, SafeAreaView, Image, Text, StyleSheet, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {

    const Item = (title) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        );
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#312ef2' }}>
            <View >
                <SafeAreaView >
                    <View>
                        <View style={[styles.headerItem, styles.sidePadding, { marginTop: 20 }]}>
                            <Image style={styles.icon} source={require('../image/menu.png')} />
                            <Image style={styles.icon} source={require('../image/bell.png')} />
                        </View>
                        <View style={[styles.headerItem, styles.sidePadding, { marginTop: 30 }]}>
                            <View >
                                <Text style={{ fontSize: 14, color: '#fff', opacity: 0.6 }}>총 토큰</Text>
                                <Text style={{ fontSize: 19, color: '#fff', fontWeight: 'bold', marginTop: 10 }}>50,000,000 GTK</Text>
                            </View>
                            <View >
                                <Text style={{ fontSize: 14, color: '#fff', opacity: 0.6 }}>총 이동 거리</Text>
                                <Text style={{ fontSize: 19, color: '#fff', fontWeight: 'bold', marginTop: 10 }}>93,000 KM</Text>
                            </View>
                        </View>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 30, height: 140, }}>
                        <View style={[styles.bookmarkerItem, { backgroundColor: '#b8f0ff' }]}>
                            <Image style={styles.bookmarkIcon} source={require('../image/bookmark1.png')} />
                            <Text style={styles.bookmarkText}>집  ➜  회사</Text>
                        </View>
                        <View style={[styles.bookmarkerItem, { backgroundColor: '#f5e6bf' }]}>
                            <Image style={styles.bookmarkIcon} source={require('../image/bookmark2.png')} />
                            <Text style={styles.bookmarkText}>집  ➜  헬스장</Text>
                        </View>
                        <View style={[styles.bookmarkerItem, { backgroundColor: '#ffcffe' }]}>
                            <Image style={styles.bookmarkIcon} source={require('../image/bookmark1.png')} />
                            <Text style={styles.bookmarkText}>헬스장  ➜  회사</Text>
                        </View>
                        <View style={[styles.bookmarkerItem, { backgroundColor: '#d6f7d5' }]}>
                            <Image style={styles.bookmarkIcon} source={require('../image/bookmark2.png')} />
                            <Text style={styles.bookmarkText}>공원  ➜  집</Text>
                        </View>

                    </ScrollView>



                </SafeAreaView>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    sidePadding: {
        marginRight: 40, marginLeft: 40
    },
    icon: {
        height: 24,
        width: 24,
    },
    headerItem: {
        flexDirection: 'row', justifyContent: 'space-between',
    },
    bookmarkerItem: {
        width: 166, borderRadius: 8, paddingLeft: 20, marginRight: 10, marginLeft: 10
    },
    bookmarkIcon: {
        width: 50, height: 50, marginTop: 20
    },
    bookmarkText: {
        fontSize: 19, marginTop: 20, fontWeight: 'bold', color: '#101369'
    },
    bodyContainer: {

    }
});

export default Home;