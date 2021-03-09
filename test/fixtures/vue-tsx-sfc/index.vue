<script>
import { defineComponent } from 'vue'

const h1 = 1
export default defineComponent({
  name: 'Index',
  setup() {
    return () => (
      <>
        <h1>About</h1>
        {[1, 2].map((i) => {
          return <div>{i}</div>
        })}
      </>
    )
  }
})
</script>
