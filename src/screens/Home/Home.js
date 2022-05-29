import { SafeAreaView, StyleSheet, FlatList, View, TextInput, Pressable } from 'react-native';

import Text from '../../components/Text/Text';
import { LogoSvg, BoxSvg } from '../../svg';
import products from '../../data/products';
import colors from '../../theme/colors';
import spacing from '../../theme/spacing';

const Home = ({ navigation }) => {
	return <SafeAreaView style={styles.container}>
		<View style={styles.logo}><LogoSvg /></View>

		<View style={styles.content}>
			<View style={styles.boxIcon}><BoxSvg /></View>

			<Text preset='h1' style={styles.title}>Non-Contact Deliveries</Text>
			<Text style={styles.description}>When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.</Text>

			<Pressable style={styles.button} onPress={() => navigation.navigate('Product', { product: products[0] })}>
				<Text preset='upper' style={{ color: colors.white }}>Order Now</Text>
			</Pressable>

			<Pressable style={styles.dismiss}>
				<Text preset='upper'>Dismiss</Text>
			</Pressable>
		</View>
	</SafeAreaView>
}
export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.purple,
		position: 'relative'
	},
	logo: {
		width: 64,
		height: 64,
		backgroundColor: colors.lightGreen,
		paddingVertical: 18.5,
		paddingHorizontal: 20,
		borderRadius: 32,
		marginTop: 64,
		marginHorizontal: spacing[5]
	},
	content: {
		textAlign: 'center',
		position: 'absolute',
		top: '35%',
		width: '100%',
		height: '65%',
		padding: spacing[5],
		backgroundColor: colors.light,
		borderTopLeftRadius: spacing[6],
		borderTopRightRadius: spacing[6],
		marginTop: 'auto',
	},
	boxIcon: {
		width: 104,
		height: 104,
		backgroundColor: colors.white,
		paddingVertical: 32,
		paddingHorizontal: 34,
		borderRadius: 52,
		marginTop: 64,
		marginHorizontal: 'auto'
	},
	title: {
		textAlign: 'center',
		marginTop: spacing[6],
		marginHorizontal: spacing[11]
	},
	description: {
		textAlign: 'center',
		marginVertical: spacing[6]
	},
	button: {
		textAlign: 'center',
		backgroundColor: colors.green,
		paddingVertical: spacing[4],
		paddingHorizontal: spacing[10],
		borderRadius: spacing[2],
		marginTop: spacing[6]
	},
	dismiss: {
		marginTop: spacing[8]
	}
});