$(".tag").on("click",".btn-delete",(function(){var t=JSON.parse($(this).attr("item-data")),a=$(this).attr("data-bs-from"),e=$(this).attr("route-handle");$(".content-modal").remove(),$("#".concat(a)).attr("action",e),contentModal=i18next.t("common.delete_setting").replace(":name",t.name),$,$("#content-modal-".concat(a)).append('<p class="content-modal u-word-break-all text-md">'.concat(_.escape(contentModal),"</p>"))}));