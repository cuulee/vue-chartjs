import Vue from 'vue'
import PieChart from 'src/examples/PieExample'

describe('PieChart', () => {
  let el

  beforeEach(() => {
    el = document.createElement('div')
  })

  it('should render a canvas', () => {
    const vm = new Vue({
      render: function (createElement) {
        return createElement(
          PieChart
        )
      },
      components: { PieChart }
    }).$mount(el)

    expect(vm.$el.querySelector('#pie-chart')).not.to.be.an('undefined')
    expect(vm.$el.querySelector('canvas')).not.to.be.an('undefined')
    expect(vm.$el.querySelector('canvas')).not.to.be.an('null')
    expect(vm.$el.querySelector('canvas')).to.exist
  })

  it('should change id based on prop', () => {
    const vm = new Vue({
      render: function (createElement) {
        return createElement(
          PieChart, {
            props: {
              chartId: 'piechartprop'
            }
          }
        )
      },
      components: { PieChart }
    }).$mount(el)

    expect(vm.$el.querySelector('#piechartprop')).not.to.be.an('undefined')
  })
  it('should destroy chart instance', (done) => {
    const vm = new Vue({
      render: function (createElement) {
        return createElement(
          PieChart
        )
      },
      components: { PieChart }
    }).$mount(el)

    expect(vm.$children[0]._chart.chart.ctx).not.to.be.null

    vm.$destroy()

    vm.$nextTick(() => {
      vm.$forceUpdate()
      expect(vm.$children[0]._chart.chart.ctx).to.be.null
      done()
    })
  })
})
