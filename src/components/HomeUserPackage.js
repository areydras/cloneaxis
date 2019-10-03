import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

const HomeUserPackage = props => {
    return(
        <View style={{ height: 170, position: 'relative' }}>
            <Image source={ require('../assets/background/bg_home_mid.webp') } style={{ height: 350, width: 150, top: -250, right: -25, position: 'absolute', resizeMode: 'contain' }} />
            {/* <View style={{ height: 110, marginHorizontal: 15, marginTop: 20, borderRadius: 10, backgroundColor: 'white', elevation: 3, flexDirection: 'row' }}>
                <View style={{ height: '100%', width: '40%', justifyContent: 'center' }}>
                    <Image source={require('../assets/icon/ic_nopackage.webp')} style={{ height: '50%', width: '50%', resizeMode: 'contain', alignSelf: 'center' }} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ color: '#7B7B7B' }}>Kamu belum mempunyai paket telepon/internet</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Recommended')}>
                            <Text style={{ fontSize: 15, marginTop: 10, color: '#EB2A8C', fontWeight: 'bold', marginRight: 15 }}>BELI SEKARANG</Text>
                        </TouchableOpacity>
                        <Image source={ require('../assets/icon/ic_info_pink.webp') } style={{ marginTop: 10, height: 25, width: 25 }} />
                    </View>
                </View>
            </View> */}
            <View style={{ height: 130, marginHorizontal: 15, marginTop: 20, borderRadius: 10, backgroundColor: 'white', elevation: 3, padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#391449' }}>KANGEN 24JAM 100MNT 30HR, Rp29900</Text>
                <Text style={{ fontSize: 12, color: '#CAC8C9' }}>Berlaku sampai 15 Des 2019</Text>
                <View style={{ height: 20, backgroundColor: '#F4BC1F', borderRadius: 20, marginTop: 10 }}></View>
                <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                    <Text style={{ color: '#CAC8C9' }}>Nelp (ke Operator lain)</Text>
                    <Text style={{ fontWeight: 'bold' }}>30 Minutes/100 Minutes</Text>
                </View>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }} onPress={ () => props.navigation.navigate('DetailPaket') }>
                    <Text style={{ fontWeight: 'bold', color: '#BF4192', marginRight: 5 }}>DETAIL PAKET</Text>
                    <Image source={ require('../assets/icon/icon_arrow2_right_pink.webp') } style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default withNavigation(HomeUserPackage)

const styles =  StyleSheet.create({
})