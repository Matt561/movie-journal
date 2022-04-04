import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material'

import './MovieCard.css'

interface MovieCardProps {
  index: number
  title: string
  type: string
  year: string
  plot: string
}

export default function MovieCard({
  index,
  title,
  type,
  year,
  plot,
}: MovieCardProps) {
  return (
    <Card sx={{ minWidth: 275, mb: 2.5 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 10, textTransform: 'capitalize' }}
          color="text.secondary"
          gutterBottom
        >
          {type}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          sx={{ fontSize: 12 }}
          variant="subtitle2"
          color="text.secondary"
        >
          {year}
        </Typography>
        <Typography sx={{ mt: 1.5 }} variant="body2">
          {plot}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
