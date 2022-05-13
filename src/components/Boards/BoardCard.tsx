import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import { IBoard } from '../../interfaces/apiInterfaces';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import UpdateBoardBtn from './UpdateBoardBtn';
import DeleteBoardBtn from './DeleteBoardBtn';
import { useGetColumnsQuery } from '../../store/services/columnsService';

import styles from './style.module.scss';

const BoardCard = ({ board }: { board: IBoard }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data = [] } = useGetColumnsQuery({ id: board.id });

  // const { data } = useGetBoardByIdQuery(board.id);
  const columnsLength = data.length;

  return (
    <Grid item xs={2} sm={4} md={4} key={board.id}>
      <Card
        className={styles['card-item']}
        sx={{ maxWidth: 345, position: 'relative', maxHeight: 100, overflow: 'auto' }}
      >
        <CardActionArea
          onClick={() => {
            console.log('open card', board.id);
            navigate(`/boards/${board.id}`);
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {board.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {columnsLength > 0
                ? t(`boards.boardDescription`, {
                    count: columnsLength,
                  })
                : t(`boards.boardDescriptionNoColumns`)}
            </Typography>
          </CardContent>
        </CardActionArea>

        <DeleteBoardBtn board={board} />
        <UpdateBoardBtn board={board} />
      </Card>
    </Grid>
  );
};

export default BoardCard;
