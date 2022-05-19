import styles from "../styles/homeComponents/Home.module.scss";
import MainContainer from "../components/Containers/MainContainer";
import SearchBar from "../components/homeComponents/SearchBar";
import CategoryCard from "../components/Cards/CategoryCard"
import TransactionCard from "../components/Cards/TransactionCard";
import HomeProfile from "../components/homeComponents/HomeProfile";
import { Title } from "../components/Titles/Titles";

const Home = () => {
	return (
		<MainContainer optionClass={styles.container}>
			<div className={styles.main}>
				<div className={styles.searchbar}>
					<SearchBar />
				</div>
				<div className={styles.categories}>
					<Title>Categories Last 30 Days</Title>
					<div className={styles.content}>
						<CategoryCard />
						<CategoryCard category={"Products"} />
						<CategoryCard />
						<CategoryCard />
					</div>
				</div>
				<div className={styles.transactions}>
					<Title>Latest Transactions</Title>
					<div className={styles.content}>
						<TransactionCard />
						<TransactionCard category={"Entertainment"} />
						<TransactionCard category={"Bills"} />
						<TransactionCard />
					</div>
				</div>
			</div>
			<div className={styles.profile}>
				<HomeProfile />
			</div>
		</MainContainer>
	);
};

export default Home;
