import { useRouter } from 'next/router';
import json from '../challenge.json';
import styles from '../styles/Home.module.css';

import { gql } from '@apollo/client';
import { useQuery, withApollo } from '@apollo/client';

const GET_MY_TAILS = gql`
  query GetTail($tail: String!) {
    long_tails(where: { tail: { _eq: $tail } }) {
      tail
      json_id
    }
  }
`;

export default function Tail() {
  const router = useRouter();
  const { tail } = router.query;
  const { loading, error, data } = useQuery(GET_MY_TAILS, {
    variables: { tail },
  });

  if (loading) {
    return <div className={styles.main}>loading</div>;
  }

  if (error) {
    return <div className={styles.main}>Try again later</div>;
  }

  if (!data?.long_tails.length) {
    return <div className={styles.main}>Theres is no a such tail</div>;
  }

  try {
    const parsedJson = JSON.parse(JSON.stringify(json));
    const { json_id } = data.long_tails[0];
    const { title: tailTitle, description } = parsedJson.find(
      (el) => el.id === json_id
    );

    return (
      <div className={styles.main}>
        {tailTitle} {description}
      </div>
    );
  } catch (err) {
    return <div className={styles.main}>Theres is no a such tail</div>;
  }
}
