import { Grid } from 'react-loader-spinner'

function CatSpinner() {
  return (
    <>
      <Grid
        height="80"
        width="80"
        color="#EE5D6C"
        ariaLabel="grid-loading"
        radius="12.5"
        visible={true}
        text-align="center"
      />
    </>
  )
}

export default CatSpinner;