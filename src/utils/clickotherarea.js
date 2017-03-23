export default {
	bind () {
		this.showEventListener = (e) => {
      if (this.el && !this.el.contains(e.target)) {
        this.vm[this.expression]()
      }
    }

    document.addEventListener('click', this.showEventListener)
	},

	update () {

	},

	unbind () {
		document.removeEventListener('click', this.showEventListener)
	}
}