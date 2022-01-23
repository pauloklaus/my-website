<template>
	<div>
		<h2 class="font-weight-bold">My Vue Components</h2>

		<b-row class="mb-4">

			<b-col md="6" lg="4" class="pr-4 mt-4">
				<h5 class="font-weight-bold">InputSearch</h5>
				<p><a href="https://github.com/pauloklaus/psk-inputsearch">github.com/pauloklaus/psk-inputsearch</a></p>
				<input-search />
			</b-col>

			<b-col md="6" lg="4" class="pr-4 mt-4">
				<h5 class="font-weight-bold">CopyAndShare</h5>
				<p><a href="https://github.com/pauloklaus/psk-copyandshare">github.com/pauloklaus/psk-copyandshare</a></p>

				<copy-and-share />
			</b-col>

			<b-col md="6" lg="4" class="pr-4 mt-4">
				<h5 class="font-weight-bold">TypeWriter</h5>
				<p><a href="https://github.com/pauloklaus/psk-typewriter">github.com/pauloklaus/psk-typewriter</a></p>

				<type-writer />
			</b-col>

			<b-col md="6" lg="4" class="pr-4 mt-4">
				<h5 class="font-weight-bold">ButtonMenu</h5>
				<p><a href="https://github.com/pauloklaus/psk-buttonmenu">github.com/pauloklaus/psk-buttonmenu</a></p>

				<button-menu />
			</b-col>

			<b-col md="6" lg="4" class="pr-4 mt-4">
				<h5 class="font-weight-bold">LoadingBar</h5>
				<p><a href="https://github.com/pauloklaus/psk-loadingbar">github.com/pauloklaus/psk-loadingbar</a></p>

				<p>Custom foreground color:
				<my-loading-bar fgClass="bg-primary" /></p>

				<p>Custom background and foreground color:
				<my-loading-bar bgClass="bg-success" fgClass="bg-white" /></p>
			</b-col>
		</b-row>

		<h3 class="font-weight-bold">On @dataplain organization</h3>

		<b-row class="mb-4">
			<b-col md="6" lg="4" class="pr-4 mt-4">
				<h5 class="font-weight-bold">TimeoutMessage</h5>
				<p><a href="https://github.com/dataplain/timeoutmessage">github.com/dataplain/timeoutmessage</a></p>

				<timeout-message />
			</b-col>

			<b-col md="6" lg="4" class="pr-4 mt-4">
				<h5 class="font-weight-bold">NotifyMessage</h5>
				<p><a href="https://github.com/dataplain/notifymessage">github.com/dataplain/notifymessage</a></p>

				<notify-message />
			</b-col>

			<b-col md="6" lg="4" class="pr-4 mt-4">
				<h5 class="font-weight-bold">RepositoryImage</h5>
				<p><a href="https://github.com/dataplain/repositoryimage">github.com/dataplain/repositoryimage</a></p>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import InputSearch from "@/components/Playground/InputSearch";
import CopyAndShare from "@/components/Playground/CopyAndShare";
import TypeWriter from "@/components/Playground/TypeWriter";
import ButtonMenu from "@/components/Playground/ButtonMenu";
import TimeoutMessage from "@/components/Playground/TimeoutMessage";
import NotifyMessage from "@/components/Playground/NotifyMessage";

export default {
	components: {
    InputSearch,
    CopyAndShare,
    TypeWriter,
    ButtonMenu,
    TimeoutMessage,
    NotifyMessage,
  }
}
</script>
