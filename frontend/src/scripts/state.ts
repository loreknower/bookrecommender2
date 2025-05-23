import { reactive } from 'vue'

/**
 * Implementazione del sistema di stato globale
 * @author Leonardo Basso
 */
export const state = reactive({
  user: {
    isLogged: false,
    userId: '',
    /**
     * Questa funzione cambia lo stato andando a inserire l'id dell'utente loggato e il parametro
     * `isLogged` come `true`
     * @param id
     * @author Leonardo Basso
     */
    setLogin(id: string): void {
      this.userId = id
      this.isLogged = true
    },
    /**
     * Questa funzione va a rimuovere il precedente userId e a pone `isLogged` come `false`
     * @author Leonardo Basso
     */
    setLogOut(): void {
      this.userId = ''
      this.isLogged = false
    },
  },
})
