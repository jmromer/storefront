import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: '20px auto'
  },
  productRoot: {
    flexGrow: 1,
    padding: 10
  },
  media: {
    height: 250
  },
  separator: {
    borderBottom: '1px solid rgba(88, 88, 88, 0.31)',
    borderBottomWidth: 0.1,
    margin: 10
  },
  content: {
    padding: 5,
    textAlign: 'center'
  },
  bold: {
    fontWeight: 500
  },
  card: {
    margin: 0.5
  }
}))

export { useStyles }
